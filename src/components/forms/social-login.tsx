import { Field, FieldSeparator } from "@/components/ui/field";
import {
  AppleIcon,
  GithubIcon,
  GoogleIcon,
} from "@/components/forms/social-icons";
import { Button } from "@/components/ui/button";

export const SocialLogin = ({ title = "Or continue with" }) => (
  <>
    <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
      {title}
    </FieldSeparator>
    <Field className="grid grid-cols-3 gap-4">
      <Button variant="outline" type="button">
        <AppleIcon />
        <span className="sr-only">Login with Apple</span>
      </Button>
      <Button variant="outline" type="button">
        <GoogleIcon />
        <span className="sr-only">Login with Google</span>
      </Button>
      <Button variant="outline" type="button">
        <GithubIcon />
        <span className="sr-only">Login with Github</span>
      </Button>
    </Field>
  </>
);
