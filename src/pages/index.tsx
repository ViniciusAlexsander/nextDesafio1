import { GetStaticProps } from 'next';
import { AiOutlineCalendar } from 'react-icons/ai';
import { MdPersonOutline } from 'react-icons/md';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        <a className={styles.post}>
          <strong>Como utilizar Hooks</strong>
          <p>Pensando em sincronização em vez de ciclos de vida.</p>
          <div className={styles.postInfo}>
            <div>
              <AiOutlineCalendar className={styles.postIcon} />
              15 Mar 2021
            </div>
            <div>
              <MdPersonOutline className={styles.postIcon} />
              Joseph Oliveira
            </div>
          </div>
        </a>
        <a className={styles.post}>
          <strong>Como utilizar Hooks</strong>
          <p>Pensando em sincronização em vez de ciclos de vida.</p>
          <div className={styles.postInfo}>
            <div>
              <AiOutlineCalendar className={styles.postIcon} />
              15 Mar 2021
            </div>
            <div>
              <MdPersonOutline className={styles.postIcon} />
              Joseph Oliveira
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
