import { GitMerge, Instagram, Linkedin } from "lucide-react";
import { Button } from "../components/Button";

const MainView: React.FunctionComponent = () => {
  return (
    <div>
      <header className="m-12">
        <h2 className="leading-snug font-semibold text-xl">UI components</h2>
      </header>
      <div className="mx-12 my-6">
        <Button variant="primary" size="medium" children="Click Me" />
        <br />
        <Button variant="secondary" size="small" children="Kiddo" />
        <br />
        <Button
          variant="secondary"
          leadingIcon={<Instagram />}
          size="large"
          children="largee"
          iconPosition="right"
        />
        <div className="w-1/3 mt-10 border border-black  px-4 py-3">
          <Button
            variant="outline"
            strecth={true}
            size="large"
            children="Kiddo"
            leadingIcon={<GitMerge />}
            iconPosition="left"
          />
        </div>
      </div>
    </div>
  );
};

export default MainView;
