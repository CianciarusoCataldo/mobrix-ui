import { MbxIcon, ReviewLogo } from "../../../types";
import { FbLogo, Google, Twitter, Linkedin } from "../../../icons/logos";
import { link, GitLogo } from "../../../icons/generic";

export const icons: Record<ReviewLogo, MbxIcon> = {
  default: link,
  link,
  facebook: FbLogo,
  github: GitLogo,
  google: Google,
  twitter: Twitter,
  linkedin: Linkedin,
};
