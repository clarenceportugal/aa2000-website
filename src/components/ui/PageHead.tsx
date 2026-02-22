import { Helmet } from 'react-helmet-async';

interface PageHeadProps {
  title: string;
  description?: string;
}

export const PageHead = ({ title, description }: PageHeadProps) => {
  const fullTitle = title === 'AA2000 Security' ? title : `${title} | AA2000 Security`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
};
