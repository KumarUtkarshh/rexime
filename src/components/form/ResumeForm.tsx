import { Form } from "@/components/ui/form";
import { CgAwards } from "react-icons/cg";
import { GoPerson } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { MdAssuredWorkload, MdWorkOutline } from "react-icons/md";
import { PiCertificateLight } from "react-icons/pi";
import { SiHyperskill } from "react-icons/si";
import { ResumeField } from "./FormField";
import { FormHeading } from "./FormHeading";
import { FormPlaceHolderSection } from "./FormPlaceHolderSection";
import FormTextArea from "./FormTextArea";

export function ResumeForm() {
  return (
    <Form>
      <div className="basics">
        <FormHeading heading="Basics" icon={<GoPerson />} />
        <ResumeField label="Full Name" placeholder="Enter name" field="name" />
        <ResumeField
          label="Title"
          placeholder="Awesome headline"
          field="title"
        />

        <div className="flex gap-2">
          <ResumeField
            label="Email"
            placeholder="email@gmail.com"
            field="contact"
            nestedKey="email"
          />
          <ResumeField
            label="Website"
            placeholder="xyz.com"
            field="contact"
            nestedKey="website"
          />
        </div>

        <div className="flex gap-2">
          <ResumeField
            label="LinkedIn"
            placeholder="linkedin url"
            field="contact"
            nestedKey="linkedin"
          />
          <ResumeField
            label="Github"
            placeholder="github url"
            field="contact"
            nestedKey="github"
          />
        </div>

        <div className="flex gap-2">
          <ResumeField
            label="Phone"
            placeholder="+1 101010101"
            field="contact"
            nestedKey="phone"
          />
          <ResumeField
            label="Location"
            placeholder="Mars"
            field="contact"
            nestedKey="location"
          />
        </div>
      </div>

      <hr className="mt-5" />
      <FormTextArea field="summary" />
      <hr className="mt-5" />

      <FormPlaceHolderSection heading="Experience" icon={<MdWorkOutline />} />
      <FormPlaceHolderSection
        heading="ExtraCurricular"
        icon={<MdWorkOutline />}
      />
      <FormPlaceHolderSection
        heading="Education"
        icon={<MdAssuredWorkload />}
      />
      <FormPlaceHolderSection heading="Skills" icon={<SiHyperskill />} />
      <FormPlaceHolderSection heading="Awards" icon={<CgAwards />} />
      <FormPlaceHolderSection
        heading="Certications"
        icon={<PiCertificateLight />}
      />
      <FormPlaceHolderSection heading="Projects" icon={<GrProjects />} />
    </Form>
  );
}
