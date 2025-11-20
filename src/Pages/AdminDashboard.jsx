import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', color: 'white' }}>
      <h1>Admin Dashboard</h1>
      <p>Select an area to manage:</p>
      
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px' }}>
        {/* Link to the User Management Page */}
        <Link to="/users" style={dashboardLinkStyle}>
          Manage Users
        </Link>
        
        {/* Link to the Contact Messages Page */}
        <Link to="/admin/messages" style={dashboardLinkStyle}>
          View Messages
        </Link>
      </div>
    </div>
  );
}

// Simple internal style for the buttons
const dashboardLinkStyle = {
  padding: '20px', 
  border: '2px solid white', 
  borderRadius: '8px', 
  color: 'white', 
  textDecoration: 'none',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  background: 'rgba(255,255,255,0.1)'
};