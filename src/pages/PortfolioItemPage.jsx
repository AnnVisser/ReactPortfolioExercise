export const PortfolioItemPage = ({ item }) => {
	return (
		<>
			<p>Title: {item.title}</p>
			<p>Description: {item.description}</p>
			<p>
				Image: <img src={item.imageUrl} width='100' height='100'></img>
			</p>
		</>
	);
};
