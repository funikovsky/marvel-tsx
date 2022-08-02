import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

const SceletonBlock = styled.div`
  position: sticky;
  top: 0;
  width: 425px;
  height: 763px;
  box-shadow: 0px 0px 20px rgb(0 0 0 / 25%);
`;

export const SceletonCharDescr = () => {
  return (
    <SceletonBlock>
      <ContentLoader
        speed={2}
        width={425}
        height={763}
        viewBox="0 0 425 763"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <rect x="200" y="22" rx="0" ry="0" width="42" height="26" />
        <rect x="25" y="17" rx="0" ry="0" width="150" height="150" />
        <rect x="207" y="94" rx="0" ry="0" width="102" height="28" />
        <rect x="208" y="141" rx="0" ry="0" width="101" height="27" />
        <rect x="25" y="370" rx="0" ry="0" width="375" height="20" />
        <rect x="26" y="404" rx="0" ry="0" width="375" height="20" />
        <rect x="27" y="438" rx="0" ry="0" width="375" height="20" />
        <rect x="27" y="474" rx="0" ry="0" width="375" height="20" />
        <rect x="27" y="510" rx="0" ry="0" width="375" height="20" />
        <rect x="27" y="545" rx="0" ry="0" width="375" height="20" />
        <rect x="29" y="578" rx="0" ry="0" width="375" height="20" />
        <rect x="28" y="613" rx="0" ry="0" width="375" height="20" />
        <rect x="28" y="337" rx="0" ry="0" width="81" height="20" />
        <rect x="26" y="211" rx="0" ry="0" width="373" height="106" />
      </ContentLoader>
    </SceletonBlock>
  );
};
