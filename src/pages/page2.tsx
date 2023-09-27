// @ts-nocheck
import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import {
  Brand,
  Breadcrumb,
  BreadcrumbItem,
  // Button,
  Card,
  CardBody,
  Gallery,
  GalleryItem,
  Masthead,
  MastheadBrand,
  MastheadContent,
  MastheadMain,
  MastheadToggle,
  NavItem,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  PageSidebarBody,
  PageToggleButton,
  SkipToContent,
} from "@patternfly/react-core";
import BarsIcon from "@patternfly/react-icons/dist/esm/icons/bars-icon";
import pfLogo from "@patternfly/react-core/src/demos/assets/pf-logo.svg";
import { PfeSection } from "./pfe";

interface NavOnSelectProps {
  groupId: number | string;
  itemId: number | string;
  to: string;
}

import { Page as _Page, PageProps } from "@patternfly/react-core";
const Page = _Page as unknown as FunctionComponent<PageProps>;

import { Nav as _Nav, NavProps } from "@patternfly/react-core";
const Nav = _Nav as unknown as FunctionComponent<NavProps>;

import { NavList as _NavList, NavListProps } from "@patternfly/react-core";
const NavList = _NavList as unknown as FunctionComponent<NavListProps>;

export const PageStickySectionGroup = () => {
  const [activeItem, setActiveItem] = useState(1);

  const onNavSelect = (_event: any, selectedItem: NavOnSelectProps) => {
    typeof selectedItem.itemId === "number" &&
      setActiveItem(selectedItem.itemId);
  };

  const dashboardBreadcrumb = (
    <Breadcrumb>
      <BreadcrumbItem>Section home</BreadcrumbItem>
      <BreadcrumbItem to="#">Section title</BreadcrumbItem>
      <BreadcrumbItem to="#">Section title</BreadcrumbItem>
      <BreadcrumbItem to="#" isActive>
        Section landing
      </BreadcrumbItem>
    </Breadcrumb>
  );

  const headerToolbar = <></>;

  const masthead = (
    <Masthead>
      <MastheadToggle>
        <PageToggleButton variant="plain" aria-label="Global navigation">
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand>
          <Brand src={pfLogo} alt="PatternFly" heights={{ default: "36px" }} />
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>
  );

  const pageNav = (
    <Nav onSelect={onNavSelect}>
      <NavList>
        <NavItem itemId={0} isActive={activeItem === 0} to="#system-panel">
          System panel
        </NavItem>
        <NavItem itemId={1} isActive={activeItem === 1} to="#policy">
          Policy
        </NavItem>
        <NavItem itemId={2} isActive={activeItem === 2} to="#auth">
          Authentication
        </NavItem>
        <NavItem itemId={3} isActive={activeItem === 3} to="#network">
          Network services
        </NavItem>
        <NavItem itemId={4} isActive={activeItem === 4} to="#server">
          Server
        </NavItem>
      </NavList>
    </Nav>
  );

  const sidebar = (
    <PageSidebar>
      <PageSidebarBody>{pageNav}</PageSidebarBody>
    </PageSidebar>
  );

  const mainContainerId = "main-content";

  const pageSkipToContent = (
    <SkipToContent href={`#${mainContainerId}`}>Skip to content</SkipToContent>
  );

  return (
    <Page
      header={masthead}
      sidebar={sidebar}
      isManagedSidebar
      skipToContent={pageSkipToContent}
      breadcrumb={dashboardBreadcrumb}
      mainContainerId={mainContainerId}
      isBreadcrumbWidthLimited
      isBreadcrumbGrouped
      additionalGroupedContent={
        <PageSection variant={PageSectionVariants.light} isWidthLimited>
          {/* <TextContent>
            <Text component="h1">Main title</Text>
            <Text component="p">This is a full page demo.</Text>
          </TextContent> */}
          <PfeSection />
          {/* <pf-x-alert variant="danger" title="test" is-expandable>
            <pf-x-button is-loading>Loading</pf-x-button>
          </pf-x-alert> */}
          {/* <pfe-button>PFE button</pfe-button> */}
        </PageSection>
      }
      groupProps={{
        stickyOnBreakpoint: { default: "top" },
      }}
    >
      <PageSection>
        <Gallery hasGutter>
          {Array.apply(0, Array(50)).map((_, i) => (
            <GalleryItem key={i}>
              <Card>
                <CardBody>This is a card</CardBody>
              </Card>
            </GalleryItem>
          ))}
        </Gallery>
      </PageSection>
    </Page>
  );
};
