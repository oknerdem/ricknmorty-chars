interface CurrentPageProps {
  page: number;
  maxPage: number;
}

const CurrentPage = ({ page, maxPage }: CurrentPageProps) => {
  return (
    <div className="text-bold text-amber-300">
      {page} / {maxPage}
    </div>
  );
};

export default CurrentPage;
