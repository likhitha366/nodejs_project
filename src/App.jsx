import { useState } from 'react';

const defaultStudent = {
  firstName: 'Aarav',
  lastName: 'Patel',
  major: 'Computer Science',
  year: 'Sophomore',
  gpa: '3.85',
  email: 'aarav.patel@example.com',
  bio: 'Passionate about AI, programming competitions, and building accessible learning tools.'
};

function App() {
  const [student, setStudent] = useState(defaultStudent);
  const [editMode, setEditMode] = useState(false);
  const [draft, setDraft] = useState(student);

  const startEdit = () => {
    setDraft(student);
    setEditMode(true);
  };

  const cancelEdit = () => {
    setEditMode(false);
  };

  const saveProfile = (event) => {
    event.preventDefault();
    setStudent(draft);
    setEditMode(false);
  };

  const updateField = (field, value) => {
    setDraft({ ...draft, [field]: value });
  };

  return (
    <div className="page-shell">
      <div className="card">
        <header className="card-header">
          <div>
            <p className="eyebrow">Smart Student Profile</p>
            <h1>{student.firstName} {student.lastName}</h1>
          </div>
          <button className="primary-button" onClick={startEdit}>Edit</button>
        </header>

        {editMode ? (
          <form className="profile-form" onSubmit={saveProfile}>
            <div className="field-grid">
              <label>
                First name
                <input
                  value={draft.firstName}
                  onChange={(e) => updateField('firstName', e.target.value)}
                />
              </label>
              <label>
                Last name
                <input
                  value={draft.lastName}
                  onChange={(e) => updateField('lastName', e.target.value)}
                />
              </label>
              <label>
                Major
                <input
                  value={draft.major}
                  onChange={(e) => updateField('major', e.target.value)}
                />
              </label>
              <label>
                Year
                <input
                  value={draft.year}
                  onChange={(e) => updateField('year', e.target.value)}
                />
              </label>
              <label>
                GPA
                <input
                  value={draft.gpa}
                  onChange={(e) => updateField('gpa', e.target.value)}
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  value={draft.email}
                  onChange={(e) => updateField('email', e.target.value)}
                />
              </label>
            </div>
            <label className="full-width">
              Bio
              <textarea
                value={draft.bio}
                onChange={(e) => updateField('bio', e.target.value)}
                rows="4"
              />
            </label>
            <div className="button-row">
              <button type="button" className="neutral-button" onClick={cancelEdit}>
                Cancel
              </button>
              <button type="submit" className="primary-button">
                Save
              </button>
            </div>
          </form>
        ) : (
          <div className="profile-view">
            <section className="item-row">
              <span className="item-label">Major</span>
              <span>{student.major}</span>
            </section>
            <section className="item-row">
              <span className="item-label">Year</span>
              <span>{student.year}</span>
            </section>
            <section className="item-row">
              <span className="item-label">GPA</span>
              <span>{student.gpa}</span>
            </section>
            <section className="item-row">
              <span className="item-label">Email</span>
              <span>{student.email}</span>
            </section>
            <section className="bio-block">
              <span className="item-label">Bio</span>
              <p>{student.bio}</p>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
