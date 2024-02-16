import { Button } from "../components/Button";
import { Card } from "../components/Card";

const CardMainView: React.FunctionComponent = () => {
  return (
    <div className="bg-slate-200 w-full h-[100vh] ">
      <header className="pt-10 px-10">
        <h2 className="leading-snug font-semibold text-xl">
          UI components-Cards
        </h2>
      </header>
      <div className="mx-12 my-6 w-[300px] ">
        <Card>This is Card</Card>
        <br />
        <Card
          mainAction={<Button variant="primary">Hello</Button>}
          withHeader={true}
          title="header"
          description="small description"
        >
          This is Card with title and description{" "}
        </Card>
      </div>
    </div>
  );
};
export default CardMainView;
