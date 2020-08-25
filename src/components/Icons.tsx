import React, { FC } from 'react';
import Icons from '../images/SocialsIcons';

type Props = {
  link: string;
  site: string;
};

const SocialsIcon: FC<Props> = ({ link, site }) => {
  const iconName = site[0].toUpperCase() + site.substring(1);

  const Icon: SvgrComponent = Icons[iconName];

  if (!Icon) return null;

  return (
    <a href={link} target='_blank' rel='noopener'>
      <Icon />
    </a>
  );
};

export default SocialsIcon;
