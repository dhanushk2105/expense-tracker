function DataTable() {
    return (
        <div className="overflow-x-auto px-20">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Testing Transaction</td>
                        <td>Test</td>
                        <td>69€</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DataTable