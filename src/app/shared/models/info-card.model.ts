interface Info {
  icon: string;
  label: string;
  value: any;
  iconColor?: string;
  outlined?: boolean;
}

interface Button {
  title: string;
}

export interface InfoCard {
  title: string;
  subTitle: string;
  infoList?: Info[],
  buttonList?: Button[]
}
