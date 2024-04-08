import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import styles from "./LandingPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAdminBlog,
  getAllCategory,
} from "../../redux/feature/blog/blogAction";
import Pagination from "../../components/pagination/Pagnation";

const LandingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState({});
  const { blogData, isLoading, categoryData } = useSelector(
    (state) => state.blog
  );
  const dispatch = useDispatch();
  const isLoggedin = localStorage.getItem("isLoggedin");
  // const { isLoggedin, userData } = useAuth()
  const [totalPage, setTotalPage] = useState(0);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    const payload = {
      categoryId: selectedCategory?._id,
      onlyApproved: true,
      page: pageIndex,
      pageSize: dataPerPage,
    };
    dispatch(getAllAdminBlog(payload)).then((e) => {
      console.log("e", e);
      if (e.type === `blog/getAllAdminBlog/fulfilled`) {
        setTotalPage(e.payload.data.lastPage);
      }
    });
  }, [selectedCategory, pageIndex]);

  const pageIndexArray = () => {
    let pageIndexOptions = [];
    for (let i = 1; i <= totalPage; i++) {
      pageIndexOptions.push(i);
    }
    return pageIndexOptions;
  };
  const pageIndexOptions = pageIndexArray();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  return (
    <>
      {isLoading && <div className="loading">Loading...</div>}
      <Navbar />
      {categoryData && categoryData?.length > 0 && (
        <div className={styles.catogery}>
          <div className={styles.container}>
            <div className={styles.catogeryList}>
              {/* MAP CATOGERY HERE DIRECT */}
              <p
                className={styles.categories}
                onClick={() => {
                  setSelectedCategory({});
                }}
              >
                All
              </p>
              {categoryData?.map((item, index) => {
                return (
                  <p
                    key={index}
                    className={styles.categories}
                    onClick={() => {
                      setSelectedCategory(item);
                    }}
                  >
                    {item.name}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className={styles.blogContainer}>
        {!isLoggedin ? (
          <p className={styles.noRecordFound}>Please login to view blogs</p>
        ) : blogData?.data && blogData?.data?.length > 0 ? (
          blogData?.data?.map((item, index) => {
            return (
              <div key={index} className={styles.card}>
                <img
                  src={item.images[0]}
                  alt="blog_image"
                  style={{ height: "100px", width: "100px" }}
                />
                <h4>{item?.title}</h4>
                <p>{item?.description}</p>
                <p>Likes:{item?.totalLikes}</p>
                <p>Comments:{item?.totalComments}</p>
              </div>
            );
          })
        ) : (
          <p className={styles.noRecordFound}>No Blogs Found</p>
        )}
      </div>
      {blogData?.data?.length > 0 && (
        <Pagination
          setDataPerPage={setDataPerPage}
          pageIndexOptions={pageIndexOptions}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
          pageSize={dataPerPage}
        />
      )}
    </>
  );
};
export default LandingPage;
