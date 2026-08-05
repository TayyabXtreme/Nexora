import { OrganizationList, SignOutButton } from "@clerk/nextjs";

export default function OrgSelectionPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <OrganizationList
        hidePersonal
        skipInvitationScreen
        afterSelectOrganizationUrl="/"
        afterCreateOrganizationUrl="/"
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "shadow-lg",
          },
        }}
      />

      <SignOutButton/>
    </div>
  );
}
