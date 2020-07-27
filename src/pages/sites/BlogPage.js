import React, { useEffect } from "react";

import { Link as RotuerLink } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import siteAction from "../../store/redux/actions/siteAction";

import MastHead from "../../components/utils/mastHead/MastHead";
import SingleBlog from "../../components/sites/singleBlog/SingleBlog";

const BlogPage = () => {
	const {
		siteReducer: { blogList, postCount },
		utilReducer: { loadingList },
		adminReducer: { postsList },
	} = useSelector((state) => state);
	const dispatch = useDispatch();
	const { fetchBlogRequest } = siteAction;

	useEffect(() => {
		dispatch(fetchBlogRequest(0));
	}, []);

	useEffect(() => {
		if (postsList.length !== 0) dispatch(fetchBlogRequest(0));
	}, [postsList]);

	let loadingBlog;
	for (var i = 0; i < loadingList.length; i++) {
		if (loadingList[i].name === "fetchBlog") loadingBlog = loadingList[i].loading;
	}

	return (
		<>
			<MastHead
				title="Blog"
				subTitle="Read all of our story"
				btnText="Tell Me More"
				showButton={false}
				backgroundImage="url('../../assets/img/about.jpg')"
			/>
			{blogList.length !== 0 ? (
				<>
					<section className="page-section bg-light" id="portfolio">
						<div className="container">
							<div className="row">
								{blogList.map((blog) => (
									<SingleBlog blog={blog} key={blog.id} />
								))}
							</div>
							<div className="row">
								<div className="col-md-12">
									<div className="text-center">
										{postCount > blogList.length && (
											<button
												className="btn btn-default"
												onClick={() => dispatch(fetchBlogRequest(blogList.length))}>
												Load More
											</button>
										)}
									</div>
								</div>
							</div>
						</div>
					</section>
				</>
			) : (
				<>
					{loadingBlog === true
						? blogList.length === 0 && "In this time, we don't have any blogs. Just wait a few time"
						: "Loading"}
				</>
			)}
		</>
	);
};

export default BlogPage;
