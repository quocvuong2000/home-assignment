import PageContainer from '@/components/Layout/PageContainer';
import ForgotPassword from '@/containers/ForgotPassword';

export default function HomePage() {
  return (
    <PageContainer>
      <div className="max-w-xl m-auto">
        <ForgotPassword />
      </div>
    </PageContainer>
  );
}
