import { useEffect, useState } from "react";
import useAxiosPublic from "../Hook/useAxiosPublic";

const PopularTeacher = () => {
    const [teacher, setTeacher] = useState(null);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchTeacher = async () => {
            try {
                const response = await axiosPublic.get('teacher');
                setTeacher(response.data);
                
            } catch (error) {
                console.error('Error fetching teacher data:', error);
            }
        };

        fetchTeacher();
    }, [axiosPublic]);
    console.log(teacher);
    return (
        <div className="mx-auto max-w-7xl my-4">
            <h1 className="text-center font-bold text-2xl my-10">Popular Teacher</h1>
            <div className="grid grid-cols-3 gap-3 ">
            {
                teacher !== null ? (
                    teacher.map((t) => (
                        <div key={t.id}>
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{t.full_name}</h2>
                                    <p>{t.qualification}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    // You can add a loading indicator or other content here
                    <p>Loading...</p>
                )
            }
        </div>
        </div>
    );
};

export default PopularTeacher;
