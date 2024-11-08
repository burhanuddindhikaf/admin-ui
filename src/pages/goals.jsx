import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const Goalspage = () => {
  return (
    <MainLayout type="Card">
      {/* Top Content Start */}
      <div className="mb-4">
        <h1 className="text-gray-02 mb-2">Goals</h1>
      </div>
      <div className="mb-8 sm:flex sm:gap-6">
        <div className="sm:w-1/3">
          <Card 
          description="ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "/>
        </div>
        <div className="sm:w-2/3">
          <Card 
          description="ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"/>
        </div>
      </div>

      {/* Top Content End */}
      
      {/* Bottom Content Start */}
      <div className="mb-4">
        <h1 className="text-gray-02 mb-2">Expenses Goals by Category</h1>
      </div>
      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card description="" />
        <Card description="" />
        <Card description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit amet,  minim veniam, quis nostrud exercitation onsectetur adipiscing elit, sed do  " />
        <Card description="" />
        <Card description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit amet,  minim veniam, quis nostrud exercitation onsectetur adipiscing elit, sed do  " />
        <Card description="" />
      </div>
      {/* Bottom Content End */}
    </MainLayout>
  );
};

export default Goalspage;
