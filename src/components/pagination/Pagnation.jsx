import styles from "./pagination.module.css";

const Pagination = ({
  pageIndexOptions,
  pageIndex,
  setPageIndex,
}) => {

  return (
    <>
      <div className={styles.paginationSection}>
        <>
          {pageIndexOptions?.map((pageOption, index) => {
            if (
              pageIndexOptions.length <= 5 || // If there are 7 or fewer page options, show all of them
              index < 3 || // Show the first 3 page options
              index >= pageIndexOptions.length - 3 || // Show the last 3 page options
              (pageIndex && Math.abs(pageIndex - pageOption) <= 1) // Show the page option if it is within 1 index of the current page
            ) {
              return (
                <div
                  className={
                    pageIndex === pageOption
                      ? styles.selectedPage
                      : styles.paginationButton
                  }
                  key={pageOption}
                  onClick={() => setPageIndex && setPageIndex(pageOption)}
                >
                  {pageOption}
                </div>
              );
            } else if (
              index === 3 && // If the current index is 3
              pageIndexOptions.length > 7 // and there are more than 7 page options
            ) {
              return (
                <div className={styles.paginationButton} key="ellipsis">
                  ...
                </div>
              );
            }
            return null;
          })}
        </>
      </div>
    </>
  );
};

export default Pagination;
