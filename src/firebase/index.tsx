import {Share} from 'react-native';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {shareableInstanceBaseURL} from '../apiServices/instance';
import {toastMessage} from '../components/toastMessages';
import {navigate} from '../routes/rootNavigation';
import {matchViewDetail} from '../redux/matches/matchDetails/action';
export const handleDynamicLink = async (link: {url: string}) => {
  const {routeName, id} = extractPathVariables(link.url);
  if (routeName == 'matches') {
    const status = await matchViewDetail(id);
    switch (status) {
      case 'started':
        navigate('LiveMatchDetails', {id, avoidFetch: true});
        break;
      case 'completed':
        navigate('CompletedMatchDetails', {id, avoidFetch: true});
        break;
      case 'fixture':
        navigate('FixtureDetail', {id, avoidFetch: true});
        break;
    }
  }
};
const extractPathVariables = (url: string) => {
  const pathParts = url.split('/');
  const routeName = pathParts[3];
  const id = pathParts[4];
  return {routeName, id} as {routeName: string; id: string};
};

export const onLink = dynamicLinks().onLink(handleDynamicLink);
export const getInitialURL = async () => {
  const initialLink = await dynamicLinks().getInitialLink();
  if (initialLink) {
    handleDynamicLink(initialLink);
    return initialLink.url;
  }
};
export const generateShareableLink = async ({
  pathName,
  id,
}: {
  pathName: string;
  id: string;
}) => {
  const link = await dynamicLinks().buildShortLink({
    link: `${shareableInstanceBaseURL}${pathName}/${id}`,
    domainUriPrefix: 'https://cricklay.page.link',
    android: {
      packageName: 'com.cricklay.eritheia',
      fallbackUrl: 'https://www.criclay.com/',
    },
    ios: {
      bundleId: 'com.cricklay.eritheia',
      appStoreId: '6464775258',
      fallbackUrl: 'https://www.criclay.com/',
    },
    analytics: {
      campaign: 'banner',
    },
  });
  return link;
};
export const onShare = async ({
  pathName,
  id,
}: {
  pathName: string;
  id: string;
  message?: string;
}) => {
  const url = await generateShareableLink({pathName, id});
  try {
    const result = await Share.share({
      message: url,
      url,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
      } else {
      }
    } else if (result.action === Share.dismissedAction) {
    }
  } catch (error: any) {
    toastMessage(error.message);
  }
};
