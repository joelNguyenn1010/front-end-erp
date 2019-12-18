import React from 'react'

export const TableItemHeader = () => {
    const columns = ["Name", "Condition", "WH Location", "Supplier", "SN", "Price", "Note"]
    return (
        <thead className="ant-table-thead">
            <tr>

                {columns.map((name) => {
                    return (
                        <th className="">
                        <span className="ant-table-header-column">
                            <div>
                                <span className="ant-table-column-title">{name}</span>
                                <span className="ant-table-column-sorter"></span>
                            </div>
                        </span>
                    </th>
                    )
                })}
            </tr>
        </thead>
    )
}
