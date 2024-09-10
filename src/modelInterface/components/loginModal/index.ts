type Route = {
  key: string;
  title: string;
};
export interface LoginModalProps {
  visible: boolean;
  onRequestClose?: () => void;
  navigationState?: {
    index: number;
    routes: Route[];
  };
}
