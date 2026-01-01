import React, { useState, useEffect } from 'react';

function Members() {
  // LocalStorage se data load karo
  const [members, setMembers] = useState(() => {
    const saved = localStorage.getItem('gymMembers');
    return saved ? JSON.parse(saved) : [
      { id: 1, name: 'Rahul Kumar', age: 28, plan: 'Premium', phone: '9876543210' },
      { id: 2, name: 'Priya Sharma', age: 24, plan: 'Standard', phone: '9876543211' },
      { id: 3, name: 'Amit Singh', age: 32, plan: 'Basic', phone: '9876543212' }
    ];
  });

  // Har change pe localStorage me save
  useEffect(() => {
    localStorage.setItem('gymMembers', JSON.stringify(members));
  }, [members]);

  const [newMember, setNewMember] = useState({
    name: '',
    age: '',
    plan: 'Basic',
    phone: ''
  });

  const handleInputChange = (e) => {
    setNewMember({
      ...newMember,
      [e.target.name]: e.target.value
    });
  };

 const addMember = (e) => {
  e.preventDefault();
  const maxId = members.length > 0 ? Math.max(...members.map(m => m.id)) : 0;
  const member = {
    id: maxId + 1,  // Next serial number
    ...newMember
  };
  // baaki code same

    setMembers([...members, member]);
    setNewMember({ name: '', age: '', plan: 'Basic', phone: '' });
  };

  const deleteMember = (id) => {
    setMembers(members.filter(member => member.id !== id));
  };

  return (
    <section className="section">
      <h2 className="section-title">Members Management</h2>
      
      <div className="add-member-form">
        <h3>Add New Member</h3>
        <form onSubmit={addMember}>
          <input 
            name="name" 
            placeholder="Full Name" 
            value={newMember.name} 
            onChange={handleInputChange} 
            required 
          />
          <input 
            type="number" 
            name="age" 
            placeholder="Age" 
            value={newMember.age} 
            onChange={handleInputChange} 
            required 
          />
          <select name="plan" value={newMember.plan} onChange={handleInputChange}>
            <option value="Basic">Basic (₹799)</option>
            <option value="Standard">Standard (₹1199)</option>
            <option value="Premium">Premium (₹1999)</option>
          </select>
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone Number" 
            value={newMember.phone} 
            onChange={handleInputChange} 
            required 
          />
          <button type="submit" className="btn-primary">➕ Add Member</button>
        </form>
      </div>

      <div className="members-table">
        <h3>📊 Total Members: <strong>{members.length}</strong></h3>
        {members.length === 0 ? (
          <p className="no-data">No members yet. Add your first member! 🎯</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Plan</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {members.map(member => (
                <tr key={member.id}>
                  <td>{member.id}</td>
                  <td>{member.name}</td>
                  <td>{member.age}</td>
                  <td>
                    <span className={`plan-badge ${member.plan.toLowerCase()}`}>
                      {member.plan}
                    </span>
                  </td>
                  <td>{member.phone}</td>
                  <td>
                    <button 
                      className="btn-danger"
                      onClick={() => deleteMember(member.id)}
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}

export default Members;
