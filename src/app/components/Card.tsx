import Link from "next/link";

type CardProps = {
  title: string;
  href: string;
};

const Card = ({ title, href }: CardProps) => {
  return (
    <Link className={styles.card} href={href} target="_blank">
      <h3 className={styles.cardTitle}>{title}</h3>
    </Link>
  );
};

export default Card;

const styles = {
  card: `flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20`,
  cardTitle: `text-2xl font-bold text-center`,
};
