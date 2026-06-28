import { useState, useEffect } from "react";
import { MessageSquare, Trash2, Calendar, User, Mail } from "lucide-react";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    setLoading(true);
    const existing = localStorage.getItem("local_messages");
    if (existing) {
      try {
        setMessages(JSON.parse(existing));
      } catch (e) {
        setMessages([]);
      }
    } else {
      setMessages([]);
    }
    setLoading(false);
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this message?");
    if (!confirm) return;

    const existing = localStorage.getItem("local_messages");
    if (existing) {
      try {
        const parsed = JSON.parse(existing);
        const filtered = parsed.filter(msg => msg._id !== id);
        localStorage.setItem("local_messages", JSON.stringify(filtered));
        setMessages(filtered);
      } catch (e) {
        console.error("Failed to delete message:", e);
      }
    }
  };

  return (
    <div className="w-100 p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Admin Messages</h2>
        <span className="badge bg-secondary font-monospace">
          {messages.length} Total
        </span>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : messages.length === 0 ? (
        <div className="card-glass text-center py-5">
          <MessageSquare size={48} className="text-muted mb-3" />
          <p className="text-muted">No messages found. Submissions from the contact form will appear here.</p>
        </div>
      ) : (
        <div className="d-flex flex-column gap-3">
          {messages.map((msg) => (
            <div key={msg._id} className="card-glass p-3">
              <div className="d-flex justify-content-between align-items-start gap-3">
                <div>
                  <h5 className="fs-6 mb-1 text-white d-flex align-items-center gap-2">
                    <User size={16} className="text-primary" />
                    {msg.name}
                  </h5>
                  <div className="d-flex align-items-center gap-2 text-muted mb-3" style={{ fontSize: "0.85rem" }}>
                    <Mail size={14} />
                    <span>{msg.email}</span>
                  </div>
                  <p className="mb-2 text-secondary" style={{ whiteSpace: "pre-wrap", fontSize: "0.95rem" }}>
                    {msg.message}
                  </p>
                  <div className="d-flex align-items-center gap-1.5 text-muted" style={{ fontSize: "0.75rem" }}>
                    <Calendar size={14} />
                    <span>Sent on: {new Date(msg.createdAt).toLocaleString()}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(msg._id)}
                  className="btn btn-sm btn-outline-danger p-2 border-0 rounded-circle"
                  title="Delete message"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminMessages;
