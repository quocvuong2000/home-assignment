import PageContainer from '@/components/Layout/PageContainer';
import Login from '@/containers/Login';

export default function HomePage() {
  return (
    <PageContainer>
      <div className="max-w-md m-auto">
        <Login />
      </div>
    </PageContainer>
  );
}
