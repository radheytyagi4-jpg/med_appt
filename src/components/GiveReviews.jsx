import React, { useState } from "react";
import "./GiveReviews.css";

function GiveReviews({ user, showNotification }) {
  const [form, setForm] = useState({ doctor: "", rating: 0, review: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleStar = (star) => setForm({ ...form, rating: star });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.rating) { showNotification("Please select a star rating.", "error"); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
    showNotification("Thank you for your review! ⭐");
  };

  if (submitted) {
    return (
      <div className="review-success">
        <div className="rs-icon">🎉</div>
        <h3>Review Submitted!</h3>
        <p>Thank you for sharing your experience. Your feedback helps others find the right care.</p>
        <button className="btn-outline" onClick={() => { setForm({ doctor: "", rating: 0, review: "" }); setSubmitted(false); }}>Write Another Review</button>
      </div>
    );
  }

  return (
    <div className="give-reviews">
      <form onSubmit={handleSubmit} className="review-form">
        <div className="form-group">
          <label>Doctor Name</label>
          <input type="text" name="doctor" placeholder="e.g. Dr. Amara Osei" value={form.doctor} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Your Rating</label>
          <div className="star-group">
            {[1,2,3,4,5].map((s) => (
              <button type="button" key={s} className={`star-btn ${form.rating >= s ? "active" : ""}`} onClick={() => handleStar(s)}>★</button>
            ))}
            <span className="rating-label">{form.rating > 0 ? ["","Poor","Fair","Good","Very Good","Excellent"][form.rating] : "Select rating"}</span>
          </div>
        </div>
        <div className="form-group">
          <label>Your Review</label>
          <textarea name="review" rows={4} placeholder="Share your experience..." value={form.review} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn-primary" disabled={loading || !user} style={{ alignSelf: "flex-start", padding: "14px 36px" }}>
          {loading ? <span className="spinner" /> : user ? "Submit Review →" : "Login to Review"}
        </button>
        {!user && <p className="review-hint">Please log in to submit a review.</p>}
      </form>
    </div>
  );
}

export default GiveReviews;
