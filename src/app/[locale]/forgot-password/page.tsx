import PageContainer from '@/components/Layout/PageContainer';
import ForgotPassword from '@/containers/ForgotPassword';

export default function HomePage() {
  return (
    <PageContainer>
      <div className="max-w-lg m-auto">
        <ForgotPassword />
      </div>
    </PageContainer>
  );
}
