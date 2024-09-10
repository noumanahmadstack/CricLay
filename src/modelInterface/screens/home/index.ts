import {ReactNode} from 'react';
export interface SlidersScreenContainerProps {
  children?: ReactNode;
}
export interface ListHeaderProps {
  headerTitle?: string;
  onPressViewAll?: () => void;
  disableViewAll?: boolean;
}
