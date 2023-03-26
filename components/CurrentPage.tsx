interface CurrentPageProps {
  page: number;
}

const CurrentPage = ({ page }: CurrentPageProps) => {
  return <div className="text-bold underline underline-offset-2">{page}</div>;
};

export default CurrentPage;
