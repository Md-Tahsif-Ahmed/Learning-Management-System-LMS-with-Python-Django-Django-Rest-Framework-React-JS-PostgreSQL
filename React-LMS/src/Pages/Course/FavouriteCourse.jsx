const FavouriteCourse = () => {
    return (
        <div className="flex justify-center items-center">
            
            <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                 
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Created By</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Delete</td>
                            </tr>
                            
                            </tbody>
                        </table>
                    </div>
                     
                  
                </div>
            </div>
        </div>
    );
};

export default FavouriteCourse;