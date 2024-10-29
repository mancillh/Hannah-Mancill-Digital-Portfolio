// Styling for Page
import '../styles/PageStyling.css';
// useRoute Error to render error page when user types something unexpected into URL
import { useRouteError } from 'react-router-dom';

// Renders Error Page
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h2>Oops!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
