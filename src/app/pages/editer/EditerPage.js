import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import { PageTitle } from "../../../_metronic/layout/core";
import GrapeEditor from "../../src/App";
import { Editer } from "./components/EditerUi";
import GrapesEditor from "./components/GrapesEditer";

const EditerPage = () => {
  const intl = useIntl();
  return (
    <>
      <PageTitle breadcrumbs={[]}>Editor</PageTitle>
      <GrapeEditor />
    </>
  );
};

export { EditerPage };
