
import { getSales } from "@/src/actions";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(price);

export default async function VentasPage() {
  const response = await getSales();

  const sales = response ?? [];
  const totalProducts = sales.length;
  const totalProfit = sales.reduce((total: number, sale: any) => {
    return total + Number(sale.producto.price) - Number(sale.producto.priceFabric);
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-300 to-red-300 p-6">
      <h1 className="text-3xl font-bold text-white mb-6">
        Ventas
      </h1>

      <div className="grid gap-4">
        {sales.length === 0 ? (
          <div className="bg-white rounded-xl p-6 text-center shadow">
            No existen ventas.
          </div>
        ) : (
          sales.map((sale: any) => {
            const priceFabric = Number(sale.producto.priceFabric);
            const price = Number(sale.producto.price);
            const profit = price - priceFabric;

            return (
              <div
                key={sale.id}
                className="flex items-center justify-between bg-white rounded-2xl shadow-md p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-red-100">
                    🛍️
                  </div>

                  <div>
                    <h2 className="text-lg font-bold">
                      producto
                    </h2>

                    <p className="text-gray-500">
                      Talla: {sale.talla}
                    </p>

                    <p className="text-sm">
                      <span className="font-semibold text-[10px] ml-1">
                        {sale.porcentajeDescuento > 0
                          ? `Con descuento ${sale.porcentajeDescuento}%`
                          : ""}
                      </span>
                    </p>

                    <span
                      className={`inline-block mt-2 rounded-full px-3 py-1 text-xs font-semibold ${
                        sale.active
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {sale.active ? "Activa" : "Inactiva"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="grid gap-1 text-right text-sm">
                    <p>
                      <span className="text-gray-500">Precio: </span>
                      <span className="font-semibold">{formatPrice(priceFabric)}</span>
                    </p>
                    <p>
                      <span className="text-gray-500">Venta: </span>
                      <span className="font-semibold">{formatPrice(price)}</span>
                    </p>
                    <p className="font-semibold text-green-700">
                      Ganancia: {formatPrice(profit)}
                    </p>
                  </div>

                  <img src={sale.producto.images[0]} className="w-[100px] h-[100px]" alt=""/>
                </div>
              </div>
            );
          })
        )}
      </div>

      {totalProducts > 0 && (
        <div className="mt-6 flex items-center justify-between rounded-2xl bg-white p-5 shadow-md">
          <p className="text-lg font-bold">Total de productos: {totalProducts}</p>
          <p className="text-lg font-bold text-green-700">
            Ganancia total: {formatPrice(totalProfit)}
          </p>
        </div>
      )}

    </div>
  );
}
