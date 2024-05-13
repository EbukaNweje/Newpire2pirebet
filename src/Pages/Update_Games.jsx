import React, {useState} from "react";
import {
    Select,
    Input,
    Button,
    DatePicker,
    TimePicker,
    Form,
    InputNumber,
} from "antd";
// import moment from 'moment';
// import 'antd/dist/antd.css'; // Import Ant Design styles by less

const {Option} = Select;

// interface MatchData {
//   homeTeam: string;
//   awayTeam: string;
//   date: moment.Moment | null;
//   time: moment.Moment | null;
//   homeWinOdds: number | null;
//   awayWinOdds: number | null;
//   drawOdds: number | null;
// }

const UpdateGames = () => {
    const [countries] = useState(["England", "Spain", "Italy"]); // Mocked countries list
    const [leagues, setLeagues] = useState([]);
    const [formData, setFormData] = useState({
        homeTeam: "",
        awayTeam: "",
        date: null,
        time: null,
        homeWinOdds: null,
        awayWinOdds: null,
        drawOdds: null,
    });

    const handleCountryChange = (value) => {
        // Simulate setting leagues based on selected country
        if (value === "England") {
            setLeagues(["Premier League", "FA Cup"]);
        } else if (value === "Spain") {
            setLeagues(["La Liga", "Copa del Rey"]);
        } else {
            setLeagues([]);
        }
    };

    const onFormChange = (key, value) => {
        setFormData((prev) => ({...prev, [key]: value}));
    };

    const submitForm = () => {
        console.log(formData);
        // Submit your form data here
    };

    return (
        <div className="w-full h-max flex flex-col p-4">
            <div className="w-full h-max flex flex-col items-center bg-gray-200">
                <p>Add Match</p>
                <Form layout="vertical" onFinish={submitForm}>
                    <div className="w-max h-max flex justify-between gap-4">
                        <Form.Item label="Country">
                            <Select
                                placeholder="Select a country"
                                onChange={handleCountryChange}
                            >
                                {countries.map((country) => (
                                    <Option key={country} value={country}>
                                        {country}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item label="League/Tournament">
                            <Select
                                placeholder="Select a league"
                                onChange={(value) =>
                                    onFormChange("league", value)
                                }
                            >
                                {leagues.map((league) => (
                                    <Option key={league} value={league}>
                                        {league}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </div>
                    <div className="w-max h-max flex justify-between gap-4">
                        <Form.Item label="Home Team">
                            <Input
                                placeholder="Home Team"
                                onChange={(e) =>
                                    onFormChange("homeTeam", e.target.value)
                                }
                            />
                        </Form.Item>
                        <Form.Item label="Away Team">
                            <Input
                                placeholder="Away Team"
                                onChange={(e) =>
                                    onFormChange("awayTeam", e.target.value)
                                }
                            />
                        </Form.Item>
                    </div>
                    <div className="w-max h-max flex justify-between gap-4">
                        <Form.Item label="Match Date">
                            <DatePicker
                                onChange={(date) => onFormChange("date", date)}
                            />
                        </Form.Item>
                        <Form.Item label="Match Time">
                            <TimePicker
                                onChange={(time) => onFormChange("time", time)}
                                format="HH:mm"
                            />
                        </Form.Item>
                    </div>
                    <div className="w-max h-max flex justify-between gap-4">
                        <Form.Item label="Home Win Odds">
                            <InputNumber
                                min={0}
                                max={100}
                                formatter={(value) => `${value}%`}
                                onChange={(value) =>
                                    onFormChange("homeWinOdds", value)
                                }
                            />
                        </Form.Item>
                        <Form.Item label="Away Win Odds">
                            <InputNumber
                                min={0}
                                max={100}
                                formatter={(value) => `${value}%`}
                                onChange={(value) =>
                                    onFormChange("awayWinOdds", value)
                                }
                            />
                        </Form.Item>
                        <Form.Item label="Draw Odds">
                            <InputNumber
                                min={0}
                                max={100}
                                formatter={(value) => `${value}%`}
                                onChange={(value) =>
                                    onFormChange("drawOdds", value)
                                }
                            />
                        </Form.Item>
                    </div>
                    <Form.Item>
                        <Button
                            type="primary"
                            size="large"
                            className="bg-green-800"
                            htmlType="submit"
                        >
                            Submit Match
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default UpdateGames;
