import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/user/profile/", {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("authToken")}`
          }
        });
        setProfile(response.data);
      } catch (err) {
        setError("Failed to fetch profile");
      }
    };

    fetchProfile();
  }, []);

  const handleChangePassword = async () => {
    setPasswordError('');
    setSuccessMessage('');
  
    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
  
    try {
      await axios.post(
        "http://127.0.0.1:8000/api/user/changepassword/",
        { password: newPassword, password2: confirmPassword }, 
        {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("authToken")}`,
            "Content-Type": "application/json",
          }
        }
      );
  
      setSuccessMessage("Password changed successfully");
      setShowChangePassword(false);
      setNewPassword('');
      setConfirmPassword('');
  
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (err) {
      setPasswordError(err.response?.data?.msg || "Failed to change password");
    }
  };
  
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-bold text-center">User Profile</h2>

      {error && <p className="text-red-500">{error}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {profile ? (
        <div className="mt-4">
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>

          <button 
            className="mt-4 text-blue-500 underline cursor-pointer" 
            onClick={() => setShowChangePassword(!showChangePassword)}
          >
            Change Password
          </button>

          {showChangePassword && (
            <div className="mt-4">
              <input
                type="password"
                placeholder="New Password"
                className="border p-2 w-full rounded-md"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="border p-2 w-full rounded-md mt-2"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {passwordError && <p className="text-red-500">{passwordError}</p>}
              {successMessage && <p className="text-green-500">{successMessage}</p>}

              <button
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={handleChangePassword}
              >
                Submit
              </button>
            </div>
          )}
        </div>
      ) : (
        <p className="text-gray-600">Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
