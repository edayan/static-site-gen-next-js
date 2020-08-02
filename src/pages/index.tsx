import { GetStaticProps } from 'next';
import { Microphone } from '../../model/Microphone';
import { openDB } from '../openDB';
import Link from 'next/link';

export interface IndexProps {
  microphones: Microphone[];
}
const Index = ({ microphones }) => (
  
  <div>
    {microphones.map((microphone: Microphone) => {
      return <Link href="/[id]" as={`/${microphone.id}`} key={microphone.id}>
        <a>{microphone.brand + microphone.model}</a>
      </Link>;
    })}
  </div>
);

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log('in index.tsx -> getStaticProps');
  const db = await openDB();
  const microphones = await db.all(`SELECT * FROM Microphone`);
  console.log(microphones);
  return { props: { microphones: microphones } };
};

export default Index;
