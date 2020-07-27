import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";

const styles = makeStyles((theme) => ({}));

const TableView = ({ rows, columns }) => {
	const classes = styles();
	return (
		<>
			<Paper>
				<Table>
					<TableHead>
						<TableRow>
							{columns && columns.map((col, index) => <TableCell key={index}>{col.label}</TableCell>)}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows &&
							rows.map((row, index) => (
								<TableRow key={index}>
									{columns.map((col, colIndex) => (
										<TableCell key={colIndex}>
											{col.name === "id" ? (
												<Link component={RouterLink} to={`/admin/posts/edit/${row[col.name]}`}>
													{row[col.name]}
												</Link>
											) : (
												row[col.name]
											)}
										</TableCell>
									))}
								</TableRow>
							))}
					</TableBody>
				</Table>
			</Paper>
		</>
	);
};

export default TableView;
