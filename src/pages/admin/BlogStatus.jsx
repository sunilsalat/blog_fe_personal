import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  blogStatus,
  getAllAdminBlog,
} from "../../redux/feature/blog/blogAction";
import styles from "./blogStatus.module.css";
import BlogStatusPopup from "../../components/modal/blogstatus/BlogStatusPopup";
import Popup from "../../components/modal/popup";
import Pagination from "../../components/pagination/Pagnation";
const BlogStatus = () => {
  const dispatch = useDispatch();
  const { blogData } = useSelector((state) => state.blog);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState({});
  const [totalPage, setTotalPage] = useState(0);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    const payload = {
      page: pageIndex,
      pageSize: dataPerPage,
    }
    dispatch(getAllAdminBlog(payload)).then((e) => {
      console.log("e", e);
      if (e.type === `blog/getAllAdminBlog/fulfilled`) {
        setTotalPage(e.payload.data.lastPage);
      }
    });
  }, [pageIndex]);

  const pageIndexArray = () => {
    let pageIndexOptions = [];
    for (let i = 1; i <= totalPage; i++) {
      pageIndexOptions.push(i);
    }
    return pageIndexOptions;
  };
  const pageIndexOptions = pageIndexArray();

  const handleShowpopup = (item) => {
    setSelectedBlog(item);
    setShowPopup(true);
  };
  const handleClose = () => {
    setShowPopup(false);
  };
  return (
    <>
      <div className={styles.container}>
        {showPopup && (
          <Popup
            Children={BlogStatusPopup}
            handleClose={handleClose}
            popData={selectedBlog}
            handleYes={(data) => {
              dispatch(
                blogStatus({
                  ...data,
                  isApproved: false,
                  blogId: selectedBlog?._id,
                })
              ).then((e) => {
                console.log("e", e);
                if (e.type === "blog/blogStatus/fulfilled") {
                  handleClose();
                }
              });
            }}
          />
        )}
        {blogData?.data && blogData?.data?.length > 0
          ? blogData?.data?.map((item, index) => {
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
                  <div className={styles.buttonGroup}>
                    <button
                      onClick={() => {
                        dispatch(
                          blogStatus({ isApproved: true, blogId: item?._id })
                        );
                      }}
                      className={styles.approveButton}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => {
                        handleShowpopup(item);
                      }}
                      className={styles.rejectButton}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              );
            })
          : "No Blogs Found"}
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
export default BlogStatus;
