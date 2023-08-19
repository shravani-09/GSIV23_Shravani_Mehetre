import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import "./SearchResult.scss";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import MovieCard from "../MovieCard/MovieCard";
import Spinner from "../Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentPage,
  fetchCurrentPage,
} from "../../Features/Movie/movieSlice";

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();
  const currentPage = useSelector(getCurrentPage);
  const dispatch = useDispatch();

  const fetchInitialData = () => {
    setLoading(true);
    dispatch(fetchCurrentPage(query, pageNum));
    setData(currentPage);
    setPageNum((prev) => prev + 1);
    setLoading(false);
  };

  const fetchNextPageData = () => {
    dispatch(fetchCurrentPage(query, pageNum));
    if (data?.results) {
      setData({
        ...data,
        results: [...data?.results, ...currentPage.results],
      });
    } else {
      setData(currentPage);
    }
    setPageNum((prev) => prev + 1);
  };

  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  }, [query]);

  return (
    <div className="searchResultsPage">
      {loading && <Spinner initial={true} />}
      {!loading && (
        <ContentWrapper>
          {data?.results?.length > 0 ? (
            <>
              <div className="pageTitle">
                {`Search ${
                  data?.total_results > 1 ? "results" : "result"
                } of '${query}'`}
              </div>
              <InfiniteScroll
                className="content"
                dataLength={data?.results?.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
                loader={<Spinner />}
              >
                {data?.results.map((item, index) => {
                  if (item.media_type === "person") return;
                  else {
                    return (
                      <MovieCard key={index} data={item} fromSearch={true} />
                    );
                  }
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="resultNotFound">Sorry, Results not found!</span>
          )}
        </ContentWrapper>
      )}
    </div>
  );
};

export default SearchResult;
