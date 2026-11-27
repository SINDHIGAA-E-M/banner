import StudentCard from "../components/StudentCard";
function Dashboard(){
    return (
        <div className="flex-1 bg-gray-100 p-6">
            <h2 className="mb-5 text-2xl font-bold">
                Dashboard
            </h2>
            <div className="grid grid-cols-3 shadow">
            <StudentCard
            Name="Sindhigaa"
            Roll="25CB051"
            />
             <StudentCard
            Name="aahsa"
            Roll="25CB054"
            />
            <StudentCard
            Name="kanna"
            Roll="25CB018"
            />
            </div>
       </div>
    )
}
export default Dashboard