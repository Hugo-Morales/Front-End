import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loading_panel } from "../../../../redux/actions/index";
import { getOrderByShop } from "../../../../redux/actions/actionsOrders";
import Loading from "../../../../components/loading/Loading";
import Buys from "./Buys";

function ShoppingHistory({ userId }) {
	const dispatch = useDispatch();
	const orders = useSelector((state) => state.orders);
	const cargando = useSelector((state) => state.loadingPanel);

	useEffect(() => {
		dispatch(loading_panel());
		dispatch(getOrderByShop(userId));
	}, [dispatch, userId]);

	// console.log("ordenes de compra", orders);

	return (
		<div>
			{cargando ? (
				<div className="flex justify-center items-center bg-white">
					<Loading />
				</div>
			) : (
				<div className="w-full h-full bg-white rounded-lg">
					<div className="overflow-y-auto">
						{orders?.length === 0 ? (
							<div className="p-3 font-bold text-center">
								Aún no has hecho compras
							</div>
						) : (
							orders?.map((order, i) => (
								<Buys
									index={i}
									key={order.id}
									id={order.id}
									shopId={order.shopId}
									state={order.state}
									total={order.total}
									userId={order.userId}
									products={order.ordenProductsId}
									shopInfo={order.shopInfo}
									productsInfo={order.productsInfo}
								/>
							))
						)}
					</div>
				</div>
			)}
		</div>
	);
}

export default ShoppingHistory;
