import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function Table({ headers, items, columnSizes }) {
    return (
        <div className='overflownContent'>
        <table className="table">
            <thead className="thead">
            <tr className="tr">
                {headers.map((header, index) => (
                    <th
                        key={index}
                        className={classNames("th", `col-${index}`, {
                            "th-center": index === 0,
                        })}
                        style={{ width: columnSizes[index] }}
                    >
                        {header}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody className="tbody">

            {items.map((item, index) => (

                <tr key={index} className="tr">

                    {Object.values(item).map((value, index) => (
                       <td
                            key={index}
                            className={classNames("td", `col-${index}`, {
                                "td-center": index === 0,
                            })}
                        >
                            {value}
                        </td>
                    ))}

                </tr>

            ))}

            </tbody>
        </table>
        </div>
    );
}

Table.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    columnSizes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Table;
