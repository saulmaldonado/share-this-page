import * as React from 'react';
import axios from 'axios';

import styles from './styles.module.less';
import { NamedExoticComponent, useEffect, useState } from 'react';
import SocialsIcon from './components/Icons';
import Icons from './images/SocialsIcons';

interface Props {
  apiKey?: string;
  twitter?: true;
  facebook?: true;
  pinterest?: true;
  facebookMessenger?: true;
  linkedin?: true;
  reddit?: true;
}

export const ExampleComponent: NamedExoticComponent<Props> = React.memo(
  ({ apiKey, children, ...sites }) => {
    const [socialMedia, setSocialMedia] = useState<Record<string, string>>({});
    const [options, setOptions] = useState<string[]>([]);

    useEffect(() => {
      setOptions(Object.keys(sites).filter(site => sites[site]));

      if (options.length) {
        setOptions(Object.keys(sites));
      }
    }, []);

    useEffect(() => {
      (async () => {
        const { data } = await axios.get<Record<keyof typeof sites, string>>(
          'apiendpoint'
        );
        setSocialMedia(data);
      })();
    }, [window.location]);

    return (
      <button className={styles.share}>
        <div className={styles.popup}>
          <span className={styles.popuptext}>SHARE</span>
          <div className={styles.icons}>
            {Object.keys(socialMedia).map(site => (
              <SocialsIcon site={site} link={'http://google.com'} />
            ))}
          </div>
        </div>
        <Icons.Share className={styles.shareIcon} />
      </button>
    );
  }
);
