import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

import Page, { PageContent } from "templates/Page";

const ThemePage = () => {
  const theme = useTheme();

  const generateColors = (colors: Record<string, string>) =>
    Object.values(colors).map((value, index) => <Color key={index} value={value} />);

  return (
    <Page>
      <StyledPageContent>
        <Title>Gray</Title>
        {generateColors(theme.gray)}
        <Title>Tint</Title>
        {generateColors(theme.tint)}
        <Title>Background</Title>
        {generateColors(theme.background)}
        <Title>Label</Title>
        {generateColors(theme.label)}
        <Title>Separator</Title>
        {generateColors(theme.separator)}
        <Title>Grouped background</Title>
        {generateColors(theme.groupedBackground)}
        <Title>Fill</Title>
        {generateColors(theme.fill)}
        <Title>Disabled</Title>
        <Color value={theme.disabled} />
      </StyledPageContent>
    </Page>
  );
};

const StyledPageContent = styled(PageContent)`
  box-sizing: border-box;
  overflow-y: auto;

  padding: 8px;
`;

const Title = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;

  &:first-of-type {
    margin-top: 0;
  }
`;

const Color = styled.span<{ value: string }>`
  display: inline-block;

  width: 16px;
  height: 16px;

  background-color: ${({ value }) => value};
`;

export default ThemePage;
