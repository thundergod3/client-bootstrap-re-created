import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import siteAction from "../../store/redux/actions/siteAction";

import cookieLocal from "../../helper/cookieLocal";

import MastHead from "../../components/utils/mastHead/MastHead";
import CommentList from "../../components/sites/commentList/CommentList";

const BlogDetailPage = ({
	match: {
		params: { slug },
	},
}) => {
	const {
		siteReducer: { blogDetail },
		utilReducer: { loadingList },
		authReducer: { authenticated },
	} = useSelector((state) => state);
	const dispatch = useDispatch();
	const { fetchBlogBySlugRequest } = siteAction;
	const token = cookieLocal.getFromCookie("token");

	useEffect(() => {
		dispatch(fetchBlogBySlugRequest(slug));
	}, []);

	let loadingBlogDetail;
	for (var i = 0; i < loadingList.length; i++) {
		if (loadingList[i].name === "fetchBlogBySlug") loadingBlogDetail = loadingList[i].loading;
	}

	return (
		<>
			{loadingBlogDetail ||
				((Object.keys(loadingList).length === 0) !== undefined && loadingBlogDetail !== true && (
					<>
						<MastHead
							title=""
							subTitle={blogDetail?.title}
							btnText="Tell Me More"
							showButton={false}
							backgroundImage={
								blogDetail.PostImage &&
								blogDetail.PostImage.length > 0 &&
								`http://localhost:8080${blogDetail.PostImage[0].url}?access_token=${token}`
							}
						/>
						<div className="container">
							<div className="row">
								<div className="col-md-9">
									<div className="post-content">
										<h1>{blogDetail.content}</h1>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<h3>Comments</h3>
									{authenticated ? (
										<CommentList />
									) : (
										<p>
											Need an account ? <Link to="/login">Login</Link>{" "}
										</p>
									)}
								</div>
							</div>
						</div>
					</>
				))}
		</>
	);
};

export default BlogDetailPage;
