import React, { useState } from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap';
import './App.css';

function App() {
  const [umur, setUmur] = useState('');
  const [berat, setBerat] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [bmi, setBmi] = useState(null);
  const [hasil, setHasil] = useState('');
  const [keterangan, setKeterangan] = useState('');

  const hitungBMI = () => {
    if (berat && tinggi) {
      const nilaiBMI = (berat / (tinggi * tinggi)) * 10000; // Mengubah cm ke m
      setBmi(nilaiBMI.toFixed(2));
      
      if (nilaiBMI < 18.5) {
        setHasil('Tidak Ideal');
        setKeterangan('Kamu kekurangan berat badan.');
      } else if (nilaiBMI >= 18.5 && nilaiBMI <= 24.9) {
        setHasil('Ideal');
        setKeterangan('Berat badan dan tinggi badanmu ideal.');
      } else if (nilaiBMI >= 25 && nilaiBMI <= 29.9) {
        setHasil('Lumayan Ideal');
        setKeterangan('Kamu sedikit kelebihan berat badan.');
      } else {
        setHasil('Tidak Ideal');
        setKeterangan('Kamu mengalami kelebihan berat badan.');
      }
    }
  };

  const muatUlang = () => {
    setUmur('');
    setBerat('');
    setTinggi('');
    setBmi(null);
    setHasil('');
    setKeterangan('');
  };

  return (
    <div className="app-container">
      <Card className="card-glow">
        <Card.Body>
          <Card.Title className="card-title">Kalkulator BMI</Card.Title>
          <Form>
            <Form.Group className="form-group">
              <Form.Label>Umur :</Form.Label>
              <Form.Control
                type="number"
                placeholder="Masukkan umurmu"
                value={umur}
                onChange={(e) => setUmur(e.target.value)}
                className="input-dark"
              />
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label>Berat Badan (kg):</Form.Label>
              <Form.Control
                type="number"
                placeholder="Masukkan berat badanmu"
                value={berat}
                onChange={(e) => setBerat(e.target.value)}
                className="input-dark"
              />
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label>Tinggi Badan (cm):</Form.Label>
              <Form.Control
                type="number"
                placeholder="Masukkan tinggi badanmu"
                value={tinggi}
                onChange={(e) => setTinggi(e.target.value)}
                className="input-dark"
              />
            </Form.Group>

            <Button variant="primary" onClick={hitungBMI} className="btn-primary">
              Hitung
            </Button>
            <Button variant="secondary" onClick={muatUlang} className="btn-secondary">
              Muat Ulang
            </Button>
          </Form>

          {bmi && (
            <Alert variant="info" className="alert-info">
              BMI kamu adalah: {bmi} ({hasil}). {keterangan}
            </Alert>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
