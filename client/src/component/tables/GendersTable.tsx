const GendersTable = () => {
    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Gender</th>
                        <th className="actions-column">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        { id: 1, gender: "Male" },
                        { id: 2, gender: "Female" },
                        { id: 3, gender: "Others" },
                    ].map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.gender}</td>
                            <td>
                                <div className="d-flex justify-content-center gap-2">
                                    <button
                                        className="btn btn-primary btn-sm"
                                        style={{
                                            padding: "10px 15px",
                                            fontSize: "12px",
                                            color: "white",
                                            borderColor: "green",
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        style={{
                                            padding: "10px 15px",
                                            fontSize: "12px",
                                            color: "white",
                                            borderColor: "red",
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default GendersTable;
