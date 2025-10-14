
export interface IExperience {
  date: string;
  iconBg: string;
  icon: string;
  companyName: string;
  title: string;
  points: string[];
}

interface ITag {
  name: string;
  color?: string;
}

export interface IProject {
  name: string;
  description1: string;
  description2: string;
  tags: ITag[];
  image: string;
  source_code_link: string;
}

export interface ITestimonial {
  name: string;
  body: string;
  designation: string;
  company: string;
  image: string;
}
