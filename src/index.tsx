import React, { useState, useEffect } from 'react';

import styles from './styles.module.less';
import SocialsIcon from './components/Icons';
import Icons from './images/SocialsIcons';
import { apiClient } from './api';

type Props = {
  apiKey?: string;
  twitter?: true;
  facebook?: true;
  pinterest?: true;
  facebookMessenger?: true;
  linkedin?: true;
  reddit?: true;
};

export const ShareButton: React.NamedExoticComponent<Props> = React.memo(
  ({ apiKey, children, ...sites }) => {
    const [socialMedia, setSocialMedia] = useState<Record<string, string>>({});

    useEffect(() => {
      let urls: Record<string, string> = {};

      const currentLocation = window.location.href;

      for (let site in sites) {
        urls[site] = currentLocation;
      }

      if (!Object.keys(urls).length) {
        urls = {
          twitter: currentLocation,
          facebook: currentLocation,
          pinterest: currentLocation,
          facebookMessenger: currentLocation,
          linkedin: currentLocation,
          reddit: currentLocation,
        };
      }

      (async () => {
        const { data } = await apiClient.post<
          Record<keyof typeof sites, string>
        >('/', urls);
        setSocialMedia(data);
      })();
    }, [window.location.href]);

    return (
      <button className={styles.share}>
        <div className={styles.popup}>
          <span className={styles.popuptext}>SHARE</span>
          <div className={styles.icons}>
            {Object.keys(socialMedia).map((site, i) => (
              <SocialsIcon site={site} link={socialMedia[site]} key={i} />
            ))}
          </div>
        </div>
        <Icons.Share className={styles.shareIcon} />
      </button>
    );
  }
);
